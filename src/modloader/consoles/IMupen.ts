import IMemory from "../../API/IMemory";
import { IRomMemory } from "../../API/IRomMemory";

interface IMupen extends IMemory, IRomMemory{

    setCoreLib(path: string): void

    setConfigDir(path: string): void

    setDataDir(path: string): void

    setPluginDir(path: string): void

    setPluginAudio(path: string): void

    setPluginGFX(path: string): void

    setPluginInput(path: string): void

    setPluginRSP(path: string): void

    runEmulator(bool: boolean): void

    savestatesRefreshHack(): void

    coreEmuState(): number

    setFrameCallback(fn: Function): void

    initialize(): void

    loadRom(rom: string): number

    pauseEmulator(): void

    stopEmulator(): void

    resumeEmulator(): void

    hookFrameCallback (): void

}

export default IMupen