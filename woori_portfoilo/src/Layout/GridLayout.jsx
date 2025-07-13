import BlogCard from "../Components/Ui/BlogCard"

const GridLayout = () => {
  return (
    <div className="grid grid-cols-4 gap-3 lg:grid-cols-4 lg:gap-12 p-10">
  <div className="h-30 rounded bg-gray-300">
    <BlogCard/>
  </div>
<div className="h-30 rounded bg-gray-300">
    <BlogCard/>
  </div><div className="h-30 rounded bg-gray-300">
    <BlogCard/>
  </div><div className="h-30 rounded bg-gray-300">
    <BlogCard/>

  </div>
</div>
  )
}

export default GridLayout