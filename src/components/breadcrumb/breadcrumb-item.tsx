export default function BreadcrumbItem(props) {
  return (
    <li className="breadcrumb-item">
      <a href={props.url}>{props.name}</a>
    </li>
  );
}
