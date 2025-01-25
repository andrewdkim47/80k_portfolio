import { mount } from 'svelte'
import './style/app.css'
import ModeSelection from './ModeSelection.svelte'

const app = mount(ModeSelection, {
  target: document.getElementById('app'),
})

export default app
