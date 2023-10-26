import { StyleSheet } from 'react-native'
import React from 'react'
import { Redirect, useRouter } from 'expo-router'

export default function index() {

  const router = useRouter();
  return (
      <Redirect href="/login"/> 
  )
}

const styles = StyleSheet.create({})