# Custom Video Player

![exampleView](/assets/example.gif)

## Install

> npm i react-custom-player


## Update

> Change color them


> Play and Pause on key 'Space'


## Exapmle using 

>  Import


```javascript
    import Player from 'react-custom-player'
```

> Using


```jsx
   const video = {
     src: videoFile,
     poster:''
   }
  return (
    <div className='App'>
      <div style={{width:'600px',height:"350px"}}>
        <Player video={video}/>
      </div>
    </div>
  );
```

> Src and Poster is reference on video and picture. 


```javascript
    import videoFile from './assests/video.mp4'
```

> or 


```javascript
    const videoFile = 'https://localhost:3000/video/name.mp4';
```


## license

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.