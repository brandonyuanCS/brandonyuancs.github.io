import { BrowserRouter, Routes, Route, Link } from "react-router";
import {Box, Group } from "@mantine/core";

import Home from '../Home';
import classes from './Router.module.css'

export default function Router() {
  return (
    <>
      <BrowserRouter>
          <Box pb={120}>
            <header className={classes.header}>
              <Group justify="space-between" h="100%" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Group h="100%" gap={0} visibleFrom="sm">
                  <Link to='/' className={classes.link}> Home </Link>
                </Group>
              </Group>
            </header>
            
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>
          </Box>
      </BrowserRouter>
    </>
  );
}