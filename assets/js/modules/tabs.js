const tabs = () => {
  const tabs = document.querySelectorAll('.technologies__point')
  const contents = document.querySelectorAll('.technologies__content')

  const resetActive = (elems) => {
    elems.forEach(elem => elem.classList.remove('active'))
  }
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      resetActive(tabs)
      tab.classList.add('active')
      const tabAttrValue = tab.getAttribute('data-point-value')
      contents.forEach(content => {
        const contentAttrValue = content.getAttribute('data-content-value')

        if (contentAttrValue === tabAttrValue) {
          resetActive(contents)
          content.classList.add('active')
        }
      })
    })
  })
}

export default tabs;