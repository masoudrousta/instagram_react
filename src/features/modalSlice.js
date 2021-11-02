import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true
    },
    closeModal: (state) => {
      state.modal = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export const selectModal = (state) => state.modal.modal

export default modalSlice.reducer
