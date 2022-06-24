import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button, Card, Col, Row } from 'antd'
import Header from '../../../../../components/header'
import InputInfoTransfer from '../../../../../components/inputInfoTransfer'
import CardTotal from 'app/components/cardTotal'

import { AppDispatch, AppState } from 'app/model'
import { onSelectStep } from 'app/model/steps.controller'
import { onSelectMethod } from 'app/model/main.controller'
import { Step } from 'app/constants'
import useTotal from 'app/hooks/useTotal'
import useValidateAmount from 'app/hooks/useValidateAmount'
import useRemainingBalance from 'app/hooks/useRemainingBalance'
import { RecipientInfo } from 'app/model/recipients.controller'

const Manual = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {
    recipients: { recipientInfos },
    main: { mintSelected, isTyping },
  } = useSelector((state: AppState) => state)
  const { quantity } = useTotal()
  const remainingBalance = useRemainingBalance(mintSelected)

  const listRecipient = useMemo(() => {
    const nextRecipient: RecipientInfo[] = []
    for (const address in recipientInfos) {
      nextRecipient.push(recipientInfos[address][0])
    }
    return nextRecipient
  }, [recipientInfos])

  const { amountError } = useValidateAmount(listRecipient)

  const onBack = useCallback(async () => {
    await dispatch(onSelectMethod())
    dispatch(onSelectStep(Step.SelectMethod))
  }, [dispatch])

  const disabled =
    quantity <= 0 || amountError || remainingBalance < 0 || isTyping

  return (
    <Card className="card-lightning" bordered={false}>
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Header label="Fill in recipient information" />
        </Col>
        <Col span={24}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Row gutter={[8, 8]}>
                <Col span={24}>Wallet address #{listRecipient.length + 1}</Col>
                {listRecipient &&
                  listRecipient.map(({ address, amount }, index) => (
                    <Col span={24} key={address + index}>
                      <InputInfoTransfer
                        amount={amount}
                        walletAddress={address}
                        index={index}
                      />
                    </Col>
                  ))}
                <Col span={24}>
                  <InputInfoTransfer />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <CardTotal />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Button onClick={onBack} size="large" type="ghost" block>
                Back
              </Button>
            </Col>
            <Col span={12}>
              <Button
                size="large"
                type="primary"
                onClick={() => dispatch(onSelectStep(Step.ConfirmTransfer))}
                block
                disabled={disabled}
              >
                Continue
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default Manual