import styled from '@emotion/styled'
import MaskedInput from 'react-text-mask'

import { inputStyles} from '../../../mixins'

export const Input = styled.input(...inputStyles)
export const InputMasked = styled(MaskedInput)(...inputStyles)
export const Textarea = styled.textarea(...inputStyles)
