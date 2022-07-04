import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { util } from '@sentre/senhub'

import { Card, Col, Row, Space, Typography } from 'antd'
import { MintSymbol } from 'shared/antd/mint'

import { AppState } from 'model'
import useTotal from 'hooks/useTotal'
import { useAccountBalanceByMintAddress } from 'shared/hooks/useAccountBalance'
import useRemainingBalance from 'hooks/useRemainingBalance'
import { TypeDistribute } from 'model/main.controller'
import { FORMAT_DATE } from '../constants'

const Content = ({ label, value }: { label: string; value: ReactNode }) => {
  return (
    <Row gutter={[4, 4]}>
      <Col span={24}>
        <Typography.Text type="secondary">{label}</Typography.Text>
      </Col>
      <Col span={24}>{value}</Col>
    </Row>
  )
}

export const WrapTotal = ({ isConfirm = false }: { isConfirm?: boolean }) => {
  const {
    main: { mintSelected, typeDistribute },
    recipients: { expirationTime, globalUnlockTime },
  } = useSelector((sate: AppState) => sate)
  const { total, quantity } = useTotal()
  const { balance } = useAccountBalanceByMintAddress(mintSelected)
  const remainingBalance = useRemainingBalance(mintSelected)

  return (
    <Row justify={isConfirm ? 'space-between' : undefined} gutter={[8, 8]}>
      <Col span={12}>
        <Row gutter={[24, 24]}>
          <Col>
            <Content
              label="Recipients"
              value={<Typography.Text>{quantity}</Typography.Text>}
            />
          </Col>
          {typeDistribute === TypeDistribute.Airdrop && (
            <Col>
              <Content
                label="Unlock time"
                value={
                  <Typography.Text>
                    {globalUnlockTime
                      ? moment(globalUnlockTime).format(FORMAT_DATE)
                      : 'Immediately'}
                  </Typography.Text>
                }
              />
            </Col>
          )}
          <Col>
            <Content
              label="Expiration time"
              value={
                <Typography.Text>
                  {expirationTime
                    ? moment(expirationTime).format(FORMAT_DATE)
                    : 'Unlimited'}
                </Typography.Text>
              }
            />
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Row gutter={[24, 24]}>
          <Col>
            <Content
              label="Your balance"
              value={
                <Space size={4}>
                  <Typography.Text>
                    {util.numeric(balance).format('0,0.00[0000]')}
                  </Typography.Text>
                  <Typography.Text>
                    <MintSymbol mintAddress={mintSelected} />
                  </Typography.Text>
                </Space>
              }
            />
          </Col>
          {!isConfirm && (
            <Col>
              <Content
                label="Total"
                value={
                  <Space size={4}>
                    <Typography.Title level={5}>{total}</Typography.Title>
                    <Typography.Title level={5}>
                      <MintSymbol mintAddress={mintSelected} />
                    </Typography.Title>
                  </Space>
                }
              />
            </Col>
          )}
          <Col>
            <Content
              label="Remaining"
              value={
                <Space size={4}>
                  <Typography.Text>
                    {util.numeric(remainingBalance).format('0,0.00[0000]')}
                  </Typography.Text>
                  <Typography.Text>
                    <MintSymbol mintAddress={mintSelected} />
                  </Typography.Text>
                </Space>
              }
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

const CardTotal = () => {
  return (
    <Card
      bordered={false}
      style={{ borderRadius: 8, boxShadow: 'unset' }}
      bodyStyle={{ padding: '12px 16px' }}
      className="card-total"
    >
      <WrapTotal />
    </Card>
  )
}

export default CardTotal
