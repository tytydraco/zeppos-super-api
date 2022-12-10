import { Battery } from './sensors/battery'
import './settings'
import { Screen } from './settings/screen'
import { Storage } from './settings/storage'

Storage.getDiskInfo().appBytes
new Battery().onLevelChange(() => { })