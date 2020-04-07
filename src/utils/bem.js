const bem = block => (element = null, mods = {}) => {
  const classes = []

  if (!element) {
    // block
    classes.push(block)

    // block modifiers
    for (const mod in mods) {
      if (mod) {
        classes.push(`${block}--${mod}`)
      }
    }
  } else {
    // element
    classes.push(`${block}__${element}`)

    // element modifiers
    for (const mod in mods) {
      if (mod) {
        classes.push(`${block}__${element}--${mod}`)
      }
    }
  }

  return classes.join(' ')
}

export default bem
