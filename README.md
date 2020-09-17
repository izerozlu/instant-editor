# Instant Editor

The instant editor is an Angular 10 project. 

Aim of this project is to demonstrate a component which enhances a `textarea`
to *almost* simultaneously processing and displaying the entered value.

Uses a `textarea` to receive the input from to user but uses a *contenteditable* 
`div` element to display the analysis result. The reason for this approach is `textarea`'s inability to display **html**
or **text node**s.

The core idea of this approach came from the blog post
[Highlight Text Inside a Textarea](https://codersblock.com/blog/highlight-text-inside-a-textarea/)
which explains the [highlight-within-textarea jquery plugin](https://github.com/lonekorean/highlight-within-textarea).

So kudos to *Will Boyd* for the 2015 blog post.
 
PS: You might find some explanation fo this approach via code comments in instant-editor.component.ts and 
instant-editor.component.html 

## Serving Project

If your sole desire is to view the results, this is your go to option.

`$ ng serve`

## Building Project

If you wish to upload the result of this project to a server, you might use
 this option but this option isn't optimized for production.

`$ ng build`
