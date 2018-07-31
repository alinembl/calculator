import chai from 'chai'
import { sum, subtract, multiply, divide } from '../src/calculator'

const expect = chai.expect

/* eslint-env mocha */
describe('calculator', () => {
  describe('sum', () => {
    it('is a function', () => {
      expect(sum).to.be.a('function')
    })
    it('sums two numbers', () => {
      expect(sum(1, 2)).to.equal(3)
    })
  })
  describe('subtract', () => {
    it('is a function', () => {
      expect(subtract).to.be.a('function')
    })
    it('subtracts two numbers', () => {
      expect(subtract(2, 1)).to.equal(1)
    })
  })

  describe('multiply', () => {
    it('is a function', () => {
      expect(multiply).to.be.a('function')
    })
    it('multiplies two numbers', () => {
      expect(multiply(3, 5)).to.equal(15)
    })
  })
  describe('divide', () => {
    it('is a function', () => {
      expect(divide).to.be.a('function')
    })
    it('divides two numbers', () => {
      expect(divide(25, 5)).to.equal(5)
    })
  })
})
