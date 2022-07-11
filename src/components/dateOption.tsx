import moment from 'moment'

import IonIcon from '@sentre/antd-ionicon'
import { Col, DatePicker, Row, Typography, Switch } from 'antd'

type DateOptionProps = {
  placeholder: string
  switchText: string
  onChange: (value: number) => void
  onSwitch: (value: boolean) => void
  label: string
  value: number
  error: string
  checked: boolean
}

const DateOption = ({
  placeholder,
  switchText,
  onChange,
  onSwitch,
  label,
  value,
  error,
  checked,
}: DateOptionProps) => {
  const onSwitchChange = (isDisable: boolean) => {
    onChange(0) //clear time
    onSwitch(isDisable)
  }
  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Row>
          <Col flex="auto">
            <Typography.Text className="caption">{label}</Typography.Text>
          </Col>
          <Col>
            <Row gutter={[8, 8]}>
              <Col xs={{ order: 2 }} lg={{ order: 1 }}>
                <Typography.Text>{switchText}</Typography.Text>
              </Col>
              <Col xs={{ order: 1 }} lg={{ order: 2 }}>
                <Switch checked={checked} onChange={onSwitchChange} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <DatePicker
          placeholder={placeholder}
          suffixIcon={<IonIcon name="time-outline" />}
          className="date-option"
          onChange={(date) => onChange(date?.valueOf() || 0)}
          disabled={checked}
          clearIcon={null}
          value={value ? moment(value) : null}
          showTime={{ showSecond: false }}
          placement="bottomRight"
        />
      </Col>
      {error && (
        <Col span={24}>
          <Typography.Text className="caption" style={{ color: '#F9575E' }}>
            {error}
          </Typography.Text>
        </Col>
      )}
    </Row>
  )
}

export default DateOption
