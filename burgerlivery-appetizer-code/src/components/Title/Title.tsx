interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode
  level: string
}

export const Title = ({ children, level = "h1", ...rest }: TitleProps) => {
  return (
    <h1 as={level} {...rest}>
      {children}
    </h1>
  )
}
