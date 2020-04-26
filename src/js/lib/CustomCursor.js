export function Cursor() {
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
  })

  // document.addEventListener('click', () => {
  //     document.querySelector('.cursor_shape').classList.add("expand");
  //
  //     setTimeout(() => {
  //         document.querySelector('.cursor_shape').classList.remove("expand");
  //     }, 500)
  // })
}

export default Cursor;
