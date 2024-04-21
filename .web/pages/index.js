/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Select as RadixThemesSelect, Separator as RadixThemesSeparator, Table as RadixThemesTable, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextHead from "next/head"



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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Text_2fad6072c87c867e84eaee8b55e9c1d8 () {
  const state__form_select_state1 = useContext(StateContexts.state__form_select_state1)



  return (
    <RadixThemesText as={`p`}>
  {JSON.stringify(state__form_select_state1.form_data)}
</RadixThemesText>
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

export function Root_026d6b49e9aef5bbcdc73141791f5ad6 () {
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
    <RadixFormRoot className={`Root`} css={{"align": "center", "width": "100%"}} onSubmit={handleSubmit_a53db8dfae7bfbeebb5115068b4fb688}>
  <RadixThemesHeading css={{"textAlign": "center", "fontSize": "5em", "marginBottom": "2rem", "color": "white"}}>
  {`Welcome to IntelliFit`}
</RadixThemesHeading>
  <RadixThemesHeading css={{"textAlign": "center", "fontSize": "3em", "marginBottom": "2rem", "color": "white"}}>
  {`Please enter your availabilty`}
</RadixThemesHeading>
  <RadixThemesFlex css={{"justifyContent": "center", "alignItems": "flex-start", "flexWrap": "wrap"}} gap={`9`}>
  <RadixThemesTable.Root>
  <RadixThemesTable.Header>
  <RadixThemesTable.Row>
  <RadixThemesTable.ColumnHeaderCell>
  {`Monday`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`Tuesday`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`Wednesday`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`Thursday`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`Friday`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`Saturday`}
</RadixThemesTable.ColumnHeaderCell>
  <RadixThemesTable.ColumnHeaderCell>
  {`Sunday`}
</RadixThemesTable.ColumnHeaderCell>
</RadixThemesTable.Row>
</RadixThemesTable.Header>
  <RadixThemesTable.Body>
  <RadixThemesTable.Row>
  <RadixThemesTable.RowHeaderCell>
  <RadixThemesSelect.Root css={{"color": "pink"}} defaultValue={`0`} name={`Monday`}>
  <RadixThemesSelect.Trigger placeholder={`Workout Session`} radius={`full`} variant={`soft`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  <RadixThemesSelect.Label>
  {`Times`}
</RadixThemesSelect.Label>
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`90`}>
  {`90`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`120`}>
  {`120`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`150`}>
  {`150`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`180`}>
  {`180`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
</RadixThemesTable.RowHeaderCell>
  <RadixThemesTable.Cell>
  <RadixThemesSelect.Root css={{"color": "pink"}} defaultValue={`0`} name={`Tuesday`}>
  <RadixThemesSelect.Trigger placeholder={`Workout Session`} radius={`full`} variant={`soft`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  <RadixThemesSelect.Label>
  {`Times`}
</RadixThemesSelect.Label>
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`90`}>
  {`90`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`120`}>
  {`120`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`150`}>
  {`150`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`180`}>
  {`180`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <RadixThemesSelect.Root css={{"color": "pink"}} defaultValue={`0`} name={`Wednesday`}>
  <RadixThemesSelect.Trigger placeholder={`Workout Session`} radius={`full`} variant={`soft`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  <RadixThemesSelect.Label>
  {`Times`}
</RadixThemesSelect.Label>
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`90`}>
  {`90`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`120`}>
  {`120`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`150`}>
  {`150`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`180`}>
  {`180`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <RadixThemesSelect.Root css={{"color": "pink"}} defaultValue={`0`} name={`Thursday`}>
  <RadixThemesSelect.Trigger placeholder={`Workout Session`} radius={`full`} variant={`soft`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  <RadixThemesSelect.Label>
  {`Times`}
</RadixThemesSelect.Label>
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`90`}>
  {`90`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`120`}>
  {`120`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`150`}>
  {`150`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`180`}>
  {`180`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <RadixThemesSelect.Root css={{"color": "pink"}} defaultValue={`0`} name={`Friday`}>
  <RadixThemesSelect.Trigger placeholder={`Workout Session`} radius={`full`} variant={`soft`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  <RadixThemesSelect.Label>
  {`Times`}
</RadixThemesSelect.Label>
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`90`}>
  {`90`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`120`}>
  {`120`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`150`}>
  {`150`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`180`}>
  {`180`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <RadixThemesSelect.Root css={{"color": "pink"}} defaultValue={`0`} name={`Saturday`}>
  <RadixThemesSelect.Trigger placeholder={`Workout Session`} radius={`full`} variant={`soft`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  <RadixThemesSelect.Label>
  {`Times`}
</RadixThemesSelect.Label>
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`90`}>
  {`90`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`120`}>
  {`120`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`150`}>
  {`150`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`180`}>
  {`180`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
</RadixThemesTable.Cell>
  <RadixThemesTable.Cell>
  <RadixThemesSelect.Root css={{"color": "pink"}} defaultValue={`0`} name={`Sunday`}>
  <RadixThemesSelect.Trigger placeholder={`Workout Session`} radius={`full`} variant={`soft`}/>
  <RadixThemesSelect.Content>
  <RadixThemesSelect.Group>
  <RadixThemesSelect.Label>
  {`Times`}
</RadixThemesSelect.Label>
  <RadixThemesSelect.Item value={`0`}>
  {`0`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`30`}>
  {`30`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`60`}>
  {`60`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`90`}>
  {`90`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`120`}>
  {`120`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`150`}>
  {`150`}
</RadixThemesSelect.Item>
  <RadixThemesSelect.Item value={`180`}>
  {`180`}
</RadixThemesSelect.Item>
</RadixThemesSelect.Group>
</RadixThemesSelect.Content>
</RadixThemesSelect.Root>
</RadixThemesTable.Cell>
</RadixThemesTable.Row>
</RadixThemesTable.Body>
</RadixThemesTable.Root>
</RadixThemesFlex>
  <RadixThemesButton css={{"margin": "0 auto", "display": "block", "align": "center", "justifyContent": "center"}} type={`submit`}>
  {`Submit`}
</RadixThemesButton>
</RadixFormRoot>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_cb5edf864ed730e6ef1545318d0da5a2/>
</div>
  <Fragment_6499b51736be44284c15de43340cb16c/>
</Fragment>
  <RadixThemesFlex css={{"background": "linear-gradient(to bottom, navy, BLACK)", "height": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`center`} css={{"width": "100%", "display": "flex", "alignItems": "center", "justifyContent": "center"}} gap={`7`}>
  <RadixThemesFlex align={`center`} css={{"justifyContent": "center", "width": "100%"}} direction={`column`} gap={`2`}>
  <Root_026d6b49e9aef5bbcdc73141791f5ad6/>
  <RadixThemesSeparator css={{"width": "100%"}} size={`4`}/>
  <RadixThemesHeading css={{"textAlign": "center"}}>
  {`Your Schedule:`}
</RadixThemesHeading>
  <Text_2fad6072c87c867e84eaee8b55e9c1d8/>
  <Text_d3386a2dc3cd115f912936e9518511bf/>
</RadixThemesFlex>
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
