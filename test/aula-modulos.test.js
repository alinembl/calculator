import assert from 'assert'
import { buy } from './aula-modulos'

// código em MochaJS. https://mochajs.org

// e-commerce
//   - tem uma função `buy` (buy é uma função? - typeof buy === 'function')

describe('aula-modulos (exemplo de código do módulo fictício e-commerce)', () => {
  // - tem uma função `buy` (buy é uma função? - typeof buy === 'function')

  it('has a method buy', () => {
    assert(typeof buy === 'function')

    if (!(typeof buy === 'function')) {
      throw new Error('buy must be a function')
    }
  })

})
