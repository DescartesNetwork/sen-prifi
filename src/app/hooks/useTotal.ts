import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { account, utils } from '@senswap/sen-js'

import { AppState } from 'app/model'
import useMintDecimals from 'shared/hooks/useMintDecimals'
import { RecipientInfos } from 'app/model/recipients.controller'

const useTotal = () => {
  const {
    main: { mintSelected },
    recipients: { recipients, errorDatas },
    setting: { decimal },
  } = useSelector((state: AppState) => state)
  const mintDecimals = useMintDecimals(mintSelected) || 0

  const calculateTotal = useCallback(
    (data: RecipientInfos) => {
      if (!data.length) return 0
      let sum = 0
      data.map((item) => {
        const amount = item[2]

        return (sum += Number(amount))
      })
      const actualAmount = decimal
        ? sum
        : utils.undecimalize(BigInt(sum), mintDecimals)
      return Number(actualAmount)
    },
    [decimal, mintDecimals],
  )

  const editedSuccData =
    errorDatas?.filter(
      (data) => !data.includes('') || !account.isAddress(data[0]),
    ) || []
  const recipientTotal = calculateTotal(recipients)
  const editedDataTotal = calculateTotal(editedSuccData)
  const editedDataLength = editedSuccData?.length
  const quantity = useMemo(() => recipients.length, [recipients])

  return {
    total: recipientTotal + editedDataTotal,
    quantity: quantity + editedDataLength,
  }
}

export default useTotal