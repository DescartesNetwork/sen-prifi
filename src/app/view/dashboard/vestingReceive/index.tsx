import { useState } from 'react'

import IonIcon from '@sentre/antd-ionicon'
import { Button, Card, Col, Row, Table, Typography } from 'antd'
import { COLUMNS_AIRDROP } from '../airdropReceive/columns'

const DEFAULT_AMOUNT = 4

const VestingReceive = () => {
  const [amountAirdrop, setAmountAirdrop] = useState(DEFAULT_AMOUNT)
  return (
    <Card className="card-lightning">
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Row>
            <Col flex="auto">
              <Typography.Title level={5}>Vesting receive</Typography.Title>
            </Col>
            <Col>Filter</Col>
          </Row>
        </Col>
        <Col span={24}>
          <Table
            dataSource={[].slice(0, amountAirdrop)}
            pagination={false}
            columns={COLUMNS_AIRDROP}
          />
        </Col>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Button
            onClick={() => setAmountAirdrop(amountAirdrop + DEFAULT_AMOUNT)}
            type="ghost"
            icon={<IonIcon name="arrow-down-outline" />}
          >
            VIEW MORE
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default VestingReceive
