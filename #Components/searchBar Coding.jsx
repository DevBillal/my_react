// App.js  **START
import CardList from './CardList/CardList'; // import CardList
import Search from './Search'; // import Search


class ShopByBrands extends Component {
// state declare
    constructor() {
        super()
        this.state = {
            img: img,
            search: ''
        }
    }

// SearchBox Coding 
    onSearchChange = (event) => {
        this.setState({ search : event.target.value })
    }
render() {
    const filter = this.state.img.filter(imgs => {
        return imgs.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase());
    })

    
    return(
// Component's & State's
        <Search searchChange={this.onSearchChange}/>
        <CardList img={ filter } />
    )
    }
}
// App.js  **END


// Next ⬇⬇


// Search.jsx 
const Search = ({ searchChange }) => {
    return (
        <div>
            <input type='text' placeholder='search...' onChange={searchChange} />
        </div>
    )
}