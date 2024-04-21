/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Button as RadixThemesButton, Card as RadixThemesCard, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Select as RadixThemesSelect, Separator as RadixThemesSeparator, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



export function Text_2fad6072c87c867e84eaee8b55e9c1d8 () {
  const state__form_select_state1 = useContext(StateContexts.state__form_select_state1)



  return (
    <RadixThemesText as={`p`}>
  {JSON.stringify(state__form_select_state1.form_data)}
</RadixThemesText>
  )
}

export function Fragment_cb5edf864ed730e6ef1545318d0da5a2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_6499b51736be44284c15de43340cb16c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Root_d81ebc19ad7a394e00ce4b9ef134efd0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  
    const handleSubmit_a53db8dfae7bfbeebb5115068b4fb688 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.form_select_state1.handle_submit", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    

  return (
    <RadixFormRoot className={`Root`} css={{"width": "100%"}} onSubmit={handleSubmit_a53db8dfae7bfbeebb5115068b4fb688}>
  <RadixThemesHeading>
  {`Welcome to LA Hacks gym scheduler`}
</RadixThemesHeading>
  <RadixThemesFlex css={{"alignItems": "flex-start", "flexWrap": "wrap"}} gap={`2`}>
  <RadixThemesCard size={`1`}>
  {`Monday`}
</RadixThemesCard>
  <RadixThemesCard size={`1`}>
  {`Tuesday`}
</RadixThemesCard>
  <RadixThemesCard size={`1`}>
  {`Wednesday`}
</RadixThemesCard>
  <RadixThemesCard size={`1`}>
  {`Thursday`}
</RadixThemesCard>
  <RadixThemesCard size={`1`}>
  {`Friday`}
</RadixThemesCard>
  <RadixThemesCard size={`1`}>
  {`Saturday`}
</RadixThemesCard>
  <RadixThemesCard size={`1`}>
  {`Sunday`}
</RadixThemesCard>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`row`} gap={`2`}>
  <RadixThemesSelect.Root defaultValue={`0`} name={`Monday`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesSelect.Root defaultValue={`0`} name={`Tuesday`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesSelect.Root defaultValue={`0`} name={`Wednesday`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesSelect.Root defaultValue={`0`} name={`Thursday`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesSelect.Root defaultValue={`0`} name={`Friday`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesSelect.Root defaultValue={`0`} name={`Saturday`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesSelect.Root defaultValue={`0`} name={`Sunday`}>
  <RadixThemesSelect.Trigger/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  {``}
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
  <RadixThemesButton type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export function Text_d3386a2dc3cd115f912936e9518511bf () {
  const state__form_select_state1 = useContext(StateContexts.state__form_select_state1)



  return (
    <RadixThemesText as={`p`}>
  {state__form_select_state1.schedule}
</RadixThemesText>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_cb5edf864ed730e6ef1545318d0da5a2/>
</div>
  <Fragment_6499b51736be44284c15de43340cb16c/>
</Fragment>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <Root_d81ebc19ad7a394e00ce4b9ef134efd0/>
  <RadixThemesSeparator css={{"width": "100%"}} size={`4`}/>
  <RadixThemesHeading>
  {`Results`}
</RadixThemesHeading>
  <Text_2fad6072c87c867e84eaee8b55e9c1d8/>
  <Text_d3386a2dc3cd115f912936e9518511bf/>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`La Hacks Gym | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
