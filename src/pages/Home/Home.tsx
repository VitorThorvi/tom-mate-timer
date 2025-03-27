import {Play} from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesInputContainer,
  SeparatorContainer,
  StartCountdownButton,
  TaskInputContainer
} from "./styles.ts";

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor='task'>Working on</label>
          <TaskInputContainer
            id='task'
            placeholder='Give it a name'
          />

          <label htmlFor="minutesAmount">during</label>
          <MinutesInputContainer
            id="minutesAmount"
            type="number"
            placeholder='20'
            step={5}
            min={5}
            max={60}
          />
          <span>minutes</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <SeparatorContainer>:</SeparatorContainer>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type='submit'>
          <Play/>
          Start
        </StartCountdownButton>
      </form>

    </HomeContainer>
  );
}