import { Web3Storage } from 'web3.storage'

import { DataLoader } from '@sentre/senhub'

const KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDg4MzdCZUI2ODM5MTcwODZjQUI3OTU0MzI3ZTgwOWU1ZTlCZTc2NTEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTU0NTU5NzI5MjAsIm5hbWUiOiJTZW50cmUifQ.Jf7oQOKMrBxp5morvs7DR_As4EU9Y5WybyuvY1teFN8'

class IPFS {
  private provider: Web3Storage
  constructor() {
    this.provider = new Web3Storage({
      token: KEY,
      endpoint: new URL('https://api.web3.storage'),
    })
  }

  set = async (data: object) => {
    const file = new File([JSON.stringify(data)], 'file', {
      type: 'application/json',
    })
    const cid = await this.provider.put([file])
    return cid
  }

  private _wrapGet = async (cid: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      setTimeout(() => {
        resolve(null)
      }, 5000)
      const re = await this.provider.get(cid)
      resolve(re)
    })
  }

  get = async <T>(cid: string): Promise<T> => {
    return DataLoader.load<T>(`ipfs^${cid}`, async () => {
      const re = await this._wrapGet(cid)
      const file = ((await re?.files()) || [])[0]
      const reader = new FileReader()
      return new Promise((resolve, reject) => {
        try {
          if (!file) throw new Error('Cannot read empty file')
          reader.onload = () => {
            const contents = reader.result?.toString()
            if (!contents) throw new Error('Cannot read empty file')
            return resolve(JSON.parse(contents))
          }
          reader.readAsText(file)
        } catch (er: any) {
          return reject(er.message)
        }
      })
    })
  }
}

export default IPFS
