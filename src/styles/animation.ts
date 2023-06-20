import { Flex, FlexProps, Box, BoxProps, Stack, StackProps, Button, ButtonProps } from '@chakra-ui/react';
import { motion } from "framer-motion";

export const animationContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1
    }
  }
}

export const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 1.5
    }
  }
}

export const MotionFlex = motion<FlexProps>(Flex);
export const MotionBox = motion<BoxProps>(Box);
export const MotionStack = motion<StackProps>(Stack);
export const MotionButton = motion<ButtonProps>(Button);