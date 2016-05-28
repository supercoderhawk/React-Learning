var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

//create ComentBox component - a simple div
var CommentBox = React.createClass({
    render: function(){
        return (
            <div className = 'commentBox'>
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>
                <CommentForm/>
            </div>
        );
    }
});

//create CommentList component - a list of comment
var CommentList = React.createClass({
    render: function(){
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

//create CommentForm component - a commit form of comment
var CommentForm = React.createClass({
    render: function(){
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

//create Comment component - diplay comment
var Comment = React.createClass({
    render: function(){
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {marked(this.props.children.toString())}
            </div>
        );
    }
});

//add component instances into DOM
ReactDOM.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);
