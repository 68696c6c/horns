class Logger {
  constructor({ enabled, name, color }) {
    this.name = name
    this.enabled = enabled
    this.color = color
  }

  log(...messages) {
    if (this.enabled) {
      console.log(`%c [DEBUG] ${this.name}`, `color: ${this.color}`, ...messages)
    }
  }
}

export const getLogger = (name, color = 'inherit', enabled = true) => {
  return new Logger({
    name,
    enabled,
    color,
  })
}
