import { Application } from "../models/application.model";

export const applyJobs = async (req, res) =>{
    try{
        const userId = req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message : "Job ID is required.",
                success : false
            });
        };
        const existingApplication = await Application.findOne({job : jobId, applicant: userId});
        if(existingApplication){
            return res.status(400).json({
                message: "You already apply for this Job.",
                success : false
            });
        };
        const job = await Job.findById(jobId);
        if(!job){
            return res.status(404).json({
                message : "Job not found.", 
                success: false
            });
        };
        const newApplication = await Application.create({
            job : jobId,
            applicant : userId
        });
        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message : "Job applied Successfully",
            success : true
        })
    }catch(error){
        console.log(error);
    }
}
export const getAppliedJobs = async (req, res) =>{
    try{
        const userId = req.id,
        const application = await Application.find({applicant:userId})
    }catch(error){
        console.log(error);
    }
}