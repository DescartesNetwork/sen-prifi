import { useState } from 'react'
import { useUI } from '@sentre/senhub'

import { Button, Card, Col, Row, Spin, Table, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'
import HistoryCard from 'components/historyCard'
import FilterSentList from 'components/filterSentList'

import useSentList, { ItemSent } from 'hooks/useSentList'
import { TypeDistribute } from 'model/main.controller'
import { COLUMNS_AIRDROP } from './columns'

const DEFAULT_AMOUNT = 4

const History = () => {
  const [amountAirdrop, setAmountAirdrop] = useState(DEFAULT_AMOUNT)
  const { loading, listHistory } = useSentList({ type: TypeDistribute.Vesting })
  const [filteredSentToken, setFilteredSentToken] = useState<ItemSent[]>([])
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
              <Col>
                <FilterSentList
                  listSent={listHistory}
                  onFilter={setFilteredSentToken}
                />
              </Col>
            </Row>
          </Col>

          {isMobile ? (
            <Col span={24}>
              {filteredSentToken.slice(0, amountAirdrop).map((history) => (
                <HistoryCard
                  itemSent={history}
                  key={history.distributorAddress}
                />
              ))}
            </Col>
          ) : (
            <Col span={24}>
              <Table
                dataSource={filteredSentToken.slice(0, amountAirdrop)}
                pagination={false}
                columns={COLUMNS_AIRDROP}
                rowKey={(record) => record.distributorAddress}
              />
            </Col>
          )}
          <Col span={24} style={{ textAlign: 'center' }}>
            <Button
              onClick={() => setAmountAirdrop(amountAirdrop + DEFAULT_AMOUNT)}
              type="ghost"
              icon={<IonIcon name="arrow-down-outline" />}
              disabled={amountAirdrop >= filteredSentToken.length}
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
