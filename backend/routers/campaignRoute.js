const express = require("express")
const { getAuthUser } = require("../middleware/gettingAuthUser")
const { createCampaign, gettingApprovedCampaigns, getMyCampaigns, deletePendingCampaign } = require("../controller/User/campaignController")
const { getAllCampaigns, setCammpaignStatusApproved, setCammpaignStatusRejected, setCammpaignStatusClosed } = require("../controller/Admin/getAllCampaigns")
const { gettingAuthAdmin } = require("../middleware/gettingAuthAdmin")
const router = express.Router()

// user routes
router.post("/create", getAuthUser, createCampaign) //status gonna be a pending
router.get("/campaigns", getAuthUser, gettingApprovedCampaigns)  //getting approved campaigns for users
router.get("/mycampaigns", getAuthUser, getMyCampaigns) //getting my campaigns 
router.get("/campaign/:id/delete", getAuthUser, deletePendingCampaign) //delete pending campaign from user

// admin routes
router.get("/campaignsAdmin",gettingAuthAdmin,  getAllCampaigns) //get all campaigns for admins
router.post("/campaigns/:id/approve", gettingAuthAdmin, setCammpaignStatusApproved) //update campaign status to approved => admins
router.post("/campaigns/:id/reject", gettingAuthAdmin, setCammpaignStatusRejected) //update campaign status to rejected => admins
router.post("/campaigns/:id/close", gettingAuthAdmin, setCammpaignStatusClosed) //update campaign status to rejected => admins



module.exports=router