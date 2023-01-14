import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { StyleProp, TextInput, TextInputProps, ViewStyle } from "react-native"
import { Flex, VStack, HStack } from 'react-native-flex-layout'

export type InputLoginRefProps = {
  focus: () => void
}

type InputLoginProps = TextInputProps & {
  onChangeText: (text: string) => void
  textStyle?: StyleProp<ViewStyle>
  trailing?: React.ReactNode
}

const InputLogin: React.ForwardRefRenderFunction<
  InputLoginRefProps,
  InputLoginProps
> = ({ textStyle, onChangeText, trailing, ...rest}, ref) => {
  const inputRef = useRef<TextInput>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }))

  const handleInput = useCallback(() => {
    setIsFocused(true)
  }, [])

  return (
    <HStack center>
      <Flex fill bg={'#FAFAFA'} radius={8} direction="row" >
        <TextInput
          ref={inputRef}
          style={{
            flex: 1,
            padding: 16,
            borderRadius: 8,

          }}
          onChangeText={(value) => {
            setIsFilled(!!value)
            onChangeText(value)
          }}
          onFocus={handleInput}
          onBlur={() => {
            setIsFocused(false)
          }}
          {...rest}
        />
        {trailing && (
          <Flex center ph={16}>
            {trailing}
          </Flex>
        )}
      </Flex>
    </HStack>
  )
}

export default forwardRef(InputLogin)
