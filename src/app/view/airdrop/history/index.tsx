import { Fragment, useState } from 'react'

import { Button, Card, Col, Row, Space, Spin, Table, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { COLUMNS_AIRDROP } from './columns'
import useSentList from 'app/hooks/useSentList'
import { TypeDistribute } from 'app/model/main.controller'
import { useUI } from '@senhub/providers'
import ExpandCard from 'app/components/expandCard'
import RowBetweenNodeTitle from 'app/components/rowBetweenNodeTitle'
import { MintAvatar, MintSymbol } from 'shared/antd/mint'
import ColumnTotal from './columns/columnTotal'
import ActionButton from './columns/actionButton'
import RowSpaceBetween from 'app/components/rowSpaceBetween'
import UnlockDateColumn from './columns/unlockDateColumn'
import moment from 'moment'

const DEFAULT_AMOUNT = 4

const History = () => {
  const [amountAirdrop, setAmountAirdrop] = useState(DEFAULT_AMOUNT)
  const { loading, listHistory } = useSentList({ type: TypeDistribute.Airdrop })
  const {
    ui: { width },
  } = useUI()

  const isMobile = width < 768

  return (
    <Spin spinning={loading}>
      <Card className="card-lightning">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Row>
              <Col flex="auto">
                <Typography.Title level={5}>History</Typography.Title>
              </Col>
              <Col>Filter</Col>
            </Row>
          </Col>
          <Col span={24}>
            {isMobile ? (
              <Fragment>
                {listHistory.slice(0, amountAirdrop).map((hisotry, idx) => {
                  const {
                    distributorAddress,
                    mint: mintAddress,
                    time,
                    total,
                    treeData,
                  } = hisotry

                  return (
                    <ExpandCard
                      style={{
                        border: '1px solid transparent',
                        borderImageSlice: '0 0 1 0',
                        borderImageWidth: 1,
                        borderImageSource:
                          'linear-gradient(90deg,transparent, #4F5B5C, transparent)',
                      }}
                      cardId={`card_airdrop_${idx}`}
                      cardHeader={
                        <Row gutter={[12, 12]}>
                          <Col span={24}>
                            <RowBetweenNodeTitle
                              title={
                                <Space>
                                  <MintAvatar mintAddress={mintAddress} />
                                  <Space size={6}>
                                    <ColumnTotal
                                      total={total.toString()}
                                      mint={mintAddress}
                                    />
                                    <MintSymbol mintAddress={mintAddress} />
                                  </Space>
                                </Space>
                              }
                            >
                              <ActionButton
                                distributorAddress={distributorAddress}
                              />
                            </RowBetweenNodeTitle>
                          </Col>
                        </Row>
                      }
                      key={idx}
                    >
                      <Row gutter={[8, 8]}>
                        <Col span={24}>
                          <RowSpaceBetween
                            label="Created time"
                            value={
                              <Typography.Text>
                                {moment(time).format('MMM DD, YYYY HH:mm')}
                              </Typography.Text>
                            }
                          />
                        </Col>
                        <Col span={24}>
                          <RowSpaceBetween
                            label="Unlock time"
                            value={<UnlockDateColumn treeData={treeData} />}
                          />
                        </Col>
                      </Row>
                    </ExpandCard>
                  )
                })}
              </Fragment>
            ) : (
              <Table
                dataSource={listHistory.slice(0, amountAirdrop)}
                pagination={false}
                columns={COLUMNS_AIRDROP}
                rowKey={(record) => record.distributorAddress}
              />
            )}
          </Col>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Button
              onClick={() => setAmountAirdrop(amountAirdrop + DEFAULT_AMOUNT)}
              type="ghost"
              icon={<IonIcon name="arrow-down-outline" />}
              disabled={amountAirdrop >= listHistory.length}
            >
              VIEW MORE
            </Button>
          </Col>
        </Row>
      </Card>
    </Spin>
  )
}

export default History
