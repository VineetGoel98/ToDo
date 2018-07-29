$(()=>{
    let newtask=$('#newtask')
    let addtask = $('#addtask')
    let todolist = $('#todolist')
    addtask.click(function(){
        
        let task=newtask.val()
        newtask.val('')
        todolist.append(
            
            $('<li>')
            .append(
                $('<span>').text(task).click(function(){
                    $(this).toggleClass('done')
                }

                )
            
            )
            
            
            .append(
                $('<button>').text('X').click(function(){
                    $(this).parent().remove()
                }

                )
            )
            .append(
                $('<button>').text('V').click(function(){
                    $(this).parent().insertAfter(
                        $(this).parent().next()
                    )
                })
            )
            .append(
                $('<button>').text('^').click(function(){
                    $(this).parent().insertBefore(
                        $(this).parent().prev()
                    )
                })
            )
            
        )
       
    })
})

