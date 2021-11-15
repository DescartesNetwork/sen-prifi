import { ReactNode } from 'react'
import { useDroppable } from '@dnd-kit/core'
import { SortableContext } from '@dnd-kit/sortable'

import { Row, Col } from 'antd'

/**
 * DroppablePage render as a Row
 */
const DroppablePage = ({
  index,
  items,
  children,
  disabled = false,
}: {
  index: number
  items: string[]
  children: ReactNode
  disabled?: boolean
}) => {
  const { setNodeRef } = useDroppable({
    id: `droppable-${index}`,
    data: { isDroppableZone: true, index },
    disabled,
  })
  const style = disabled
    ? { transition: 'all 0.25s ease-in-out' }
    : {
        transition: 'all 0.25s ease-in-out',
        background: '#00000010',
        padding: 8,
        borderRadius: 24,
        minHeight: 100,
      }

  return (
    <SortableContext items={items}>
      <Row id={`droppable-${index}`} gutter={[24, 24]} ref={setNodeRef}>
        <Col span={24}>
          <div style={style}>
            <Row gutter={[12, 12]}>{children}</Row>
          </div>
        </Col>
      </Row>
    </SortableContext>
  )
}

export default DroppablePage
