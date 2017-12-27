

class PageBuilder {
   build(content: string){
      return `
         <!DOCTYPE html>
         <html lang="en">
         <head>
            <meta charset="UTF-8">
            <title>Document</title>
            <link rel="stylesheet" href="/build/styles.css">
         </head>
         <body>
            <div id="root"><!-- ##serverRenderRoot## --></div>
            <script src="/build/client.js"></script>
         </body>
         </html>
      `
   }
}


export { PageBuilder } 