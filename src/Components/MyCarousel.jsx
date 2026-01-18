import React from 'react'

const MyCarousal = () => {
  return (
    <>
      
      <div className="carousel w-full">
  <div id="item1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#item5" className="btn btn-circle">❮</a>
      <a href="#item2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="item2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#item1" className="btn btn-circle">❮</a>
      <a href="#item3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="item3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#item2" className="btn btn-circle">❮</a>
      <a href="#item4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="item4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#item3" className="btn btn-circle">❮</a>
      <a href="#item5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="item5" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#item4" className="btn btn-circle">❮</a>
      <a href="#item1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
  <a href="#item5" className="btn btn-xs">5</a>
</div>
    </>
  )
}

export default MyCarousal
