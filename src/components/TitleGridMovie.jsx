import useSearchContext from "@/hooks/useSearch"
import { usePathname } from "next/navigation"

const TitleGridMovie = () => {
  const { searchGenre, searchText } = useSearchContext()
  const pathname = usePathname()

  return (
    <>
      {
        pathname !== '/' && (
          <h1 className="text-3xl text-center font-semibold mb-5">
            {
              searchGenre && searchText ? searchGenre + ': ' + searchText :
                searchGenre === 'All Genres' ? 'Movies' :
                  searchGenre ? searchGenre + ': ' + searchText :
                    searchText ? 'Search: ' + searchText : 'Movies'
            }
          </h1>
        )
      }
    </>
  )
}

export default TitleGridMovie