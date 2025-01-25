export default function SearchBar({searchTerm,setSearchTerm}){
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
      }; 
return (
<div>
<input
        name="Search"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}/>
</div>
)

}