import BreadcrumbItem from "./breadcrumb-item";

export default function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <BreadcrumbItem url="/box" name="Home" />
      </ol>
    </nav>
  );
}
