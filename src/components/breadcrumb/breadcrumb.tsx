import BreadcrumbItem from "./breadcrumb-item";

export default function Breadcrumb(props) {
  console.log(props.paths)

  return (
    <>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <BreadcrumbItem url="/box" name="Home" />
        <li className="breadcrumb-item">Library</li>
      </ol>
    </nav>
    </>
  );  
}