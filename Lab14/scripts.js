	$(function(){
			$("#button1").click(buttonClickEvent);
			function buttonClickEvent(){
				fetch("https://jsonplaceholder.typicode.com/users/?id=" + $("#userId").val())
						.then(response => response.json())
						.then(function (data){
							$("#id1").text(data[0].id);
							$("#name").text(data[0].name);
							$("#username").text(data[0].username);
							$("#email").text(data[0].email);
							$("#phone").text(data[0].phone);
							$("#website").text(data[0].website);
					});
			}
			fetch("https://jsonplaceholder.typicode.com/posts?postId=1")
				.then(response => response.json())
				.then(function(data){
					let postsHtml = '';
					for (i=0; i < data.length; i++){
						postsHtml += '<ul><li>' + data[i].title + '</li>';
						postsHtml += '<li>' + data[i].body + '</li></ul>';
						postsHtml += '<button id="button_'+i+'" value="'+data[i].id+'">Comments</button>';
					}
					$("#posts").html(postsHtml);
				});
			$(document).on("click", "button", function(){
				fetch("https://jsonplaceholder.typicode.com/comments?postId=" + $(this).val())
				.then(response => response.json())
				.then(function(data){
					let commentHtml = '';
					console.log(data);
					for (i=0; i < data.length; i++){
						commentHtml += '<ul><li>' + data[i].name + '</li>';
						commentHtml += '<li>' + data[i].email + '</li>';
						commentHtml += '<li>' + data[i].body + '</li></ul>';
					}
					$("#comments").html(commentHtml);
				});
			});
		});