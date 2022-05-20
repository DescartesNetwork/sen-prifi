import { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'

import { Col, Modal, Row, Space, Typography, Table, Button } from 'antd'
import IonIcon from 'shared/antd/ionicon'

import { HISTORY_COLUMN } from './column'
import { AppState } from 'app/model'

import './index.less'

const HistoryButton = () => {
  const [visible, setVisible] = useState(false)
  const { history } = useSelector((state: AppState) => state)

  return (
    <Fragment>
      <Button
        type="text"
        icon={<IonIcon name="document-text-outline" />}
        onClick={() => setVisible(true)}
      />

      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        closeIcon={<IonIcon name="close-outline" />}
        footer={false}
        className="card-lightning"
        style={{ paddingBottom: 0 }}
      >
        <Row gutter={[32, 32]} style={{ maxHeight: 500 }} className="scrollbar">
          <Col span={24}>
            <Typography.Title level={5}>Transfer history</Typography.Title>
          </Col>
          <Col span={24}>
            <Space align="baseline">
              <IonIcon name="information-circle-outline" />
              <Typography.Text>
                The history of each transaction is saved only on the device
                where the transaction was made.
              </Typography.Text>
            </Space>
          </Col>
          <Col span={24}>
            <Table
              columns={HISTORY_COLUMN}
              dataSource={history}
              pagination={false}
              rowKey={(record) => record.distributorAddress}
            />
          </Col>
        </Row>
      </Modal>
    </Fragment>
  )
}

export default HistoryButton
