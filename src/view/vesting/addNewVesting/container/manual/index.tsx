import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BN from 'bn.js'
import { utilsBN } from 'sentre-web3'

import { Button, Card, Col, Row } from 'antd'
import Header from '../../../../../components/header'
import CardTotal from 'components/cardTotal'
import MethodInputRecipient from './methodInputRecipient'

import { AppDispatch, AppState } from 'model'
import { onSelectStep } from 'model/steps.controller'
import { SelectMethod, Step } from '../../../../../constants'
import useTotal from 'hooks/useTotal'
import useValidateAmount from 'hooks/useValidateAmount'
import useRemainingBalance from 'hooks/useRemainingBalance'
import {
  RecipientInfo,
  removeRecipients,
  setGlobalUnlockTime,
} from 'model/recipients.controller'
import {
  setAdvancedMode,
  setListUnlockTime,
} from 'model/advancedMode.controller'
import { onSelectMethod } from 'model/main.controller'
import useMintDecimals from 'shared/hooks/useMintDecimals'

const Manual = () => {
  const {
    recipients: { recipientInfos },
    main: { mintSelected, isTyping },
  } = useSelector((state: AppState) => state)
  const { quantity } = useTotal()
  const remainingBalance = useRemainingBalance(mintSelected)
  const mintDecimals = useMintDecimals(mintSelected) || 0
  const { amountError } = useValidateAmount()
  const dispatch = useDispatch<AppDispatch>()

  const listRecipient = useMemo(() => {
    const nextRecipient: RecipientInfo[] = []
    if (!mintDecimals) return nextRecipient
    for (const address in recipientInfos) {
      const recipientInfoData = recipientInfos[address]
      let newAmount = new BN(0)
      for (const { amount } of recipientInfoData) {
        const bnAmount = utilsBN.decimalize(amount, mintDecimals)
        newAmount = newAmount.add(bnAmount)
      }

      const recipient: RecipientInfo = {
        address,
        amount: utilsBN.undecimalize(newAmount, mintDecimals),
        unlockTime: 0,
      }
      nextRecipient.push(recipient)
    }
    return nextRecipient
  }, [mintDecimals, recipientInfos])

  const onBack = useCallback(async () => {
    await dispatch(removeRecipients())
    await dispatch(setAdvancedMode(false))
    await dispatch(setListUnlockTime([]))
    await dispatch(setGlobalUnlockTime(0))
    dispatch(onSelectStep(Step.SelectMethod))
    dispatch(onSelectMethod(SelectMethod.manual))
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
            {listRecipient &&
              listRecipient.map(({ address, amount }, index) => (
                <Col span={24} key={address + index}>
                  <MethodInputRecipient
                    walletAddress={address}
                    amount={amount}
                    index={index}
                  />
                </Col>
              ))}
            <Col span={24}>
              <MethodInputRecipient />
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