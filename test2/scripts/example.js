//create ComentBox component - a simple div
var ComentBox = React.createClass({
    render: function(){
        return (
            <div className = 'commentBox'>
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});

//add component instance into DOM
ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);
