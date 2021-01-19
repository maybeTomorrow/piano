

class Bg{
    constructor(){
        this.root=document.getElementById("root")
        this.ctx=document.getElementById("bg")
        this.c=this.ctx.getContext('2d')
        this.width=this.root.clientWidth
        this.height=this.root.clientHeight
        this.ctx.width=this.width
        this.ctx.height=this.height
    }

    draw(){
        var h1=this.height/10
        this.c.lineWidth=1;
        for(var i=2;i<9;i++){
            var y=h1*i
            this.c.moveTo(0+0.5,y+0.5)
            this.c.lineTo(this.width+0.5,y+0.5)
            this.c.stroke()
        }
        
    }
}

var bg=new Bg()
bg.draw()