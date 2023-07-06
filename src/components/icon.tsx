interface Props {name: string}
export default (props: Props) => <i className={`bi bi-${props.name} p-2`}></i>;