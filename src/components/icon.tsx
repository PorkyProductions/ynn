interface Props {name: string}
export default (props: Props) => <i className={`bi bi-${props.name} pr-2`}></i>;