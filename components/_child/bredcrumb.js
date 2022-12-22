import Link from "next/link";
export default function Bredcrumb() {
  return (
    <div className="bg-white border-bottom mt-2"> <div className="container"> 
    <div className="page-header"><ol className="breadcrumb"> 
    <li className="breadcrumb-item"> <Link href="/">Home</Link></li> 
    <li className="breadcrumb-item"><Link href="/">Jobs</Link></li> 
    <li className="breadcrumb-item"><Link href="/#">Sub Category</Link></li> 
    <li className="breadcrumb-item active" aria-current="page">Ad Details</li> 
    </ol> </div> </div> </div>

  )
}
