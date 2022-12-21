export default function ConditionalRender({ condition, show, elseShow }: { condition: boolean, show: JSX.Element, elseShow?: JSX.Element }) {
    return elseShow ? (condition ? show : elseShow as JSX.Element) : (<>{condition && show}</>);
}