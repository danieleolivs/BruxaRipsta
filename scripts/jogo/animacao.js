class Animacao{
  constructor(imagem,x, variacaoY, largura,altura,larguraSprite, alturaSprite){
    this.imagem = imagem
    this.largura = largura
    this.altura = altura
    this.x = x
    this.variacaoY = variacaoY
    this.y = height - this.altura - this.variacaoY
    this.larguraSprite = larguraSprite
    this.alturaSprite = alturaSprite
    
    this.frameAtual = 0;
  }
  
  exibe(){
    image(this.imagem,this.x,this.y,this.largura,this.altura,this.larguraSprite,this.alturaSprite)
    
    //this.anima()
  }
  
  anima(){
    this.frameAtual++
    
    if(this.frameAtual >= this.matriz.length - 1){
      this.frameAtual = 0
    }
  }
}