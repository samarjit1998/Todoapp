var React = reuire('react');

var TodoSearch = React.createClass( {
    handleSearch : function(){
        var showCompleted = this.refs.showCompleted.checked;
        var searchText= this.refs.searchText.value;

        this.props.onSearch(showCompleted,searchText)
    }

    render : function() {
        return(
            <div className="container_header">
            <div>
            <input type "search" ref="searchText" placeholder="search todos" onChange{this.handleSearch}/>
            </div> 
              <div>
              <label>
              <input type="checkbox" ref ="showCompleted"  onChange{this.}/>
              show completed todos
              </label>
              </div>
              </div>
        )
    }
})
module.exports = TodoSearch